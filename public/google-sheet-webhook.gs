/**
 * Google Apps Script - ApexVertex Sheet Webhook
 * 
 * Instructions:
 * 1. Open your Google Sheet.
 * 2. Click Extensions > Apps Script.
 * 3. Delete any default code and paste this script.
 * 4. Replace 'info@yourcompany.com' with your actual business email address.
 * 5. Click 'Deploy' > 'New deployment'.
 * 6. Select 'Web app'.
 * 7. Set 'Execute as' to 'Me'.
 * 8. Set 'Who has access' to 'Anyone'.
 * 9. Click Deploy, authorize permissions, and copy the Web App URL.
 * 10. Set this URL as the GOOGLE_SCRIPT_URL environment variable in your Vercel project dashboard.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var payload = JSON.parse(e.postData.contents);
    
    var type = payload.type || 'Unknown';
    var email = payload.email || '';
    var name = payload.name || '';
    var projectType = payload.projectType || '';
    var message = payload.message || '';
    var timestamp = payload.timestamp || new Date().toISOString();
    
    // Auto-setup headers if the sheet is completely empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Type', 'Email', 'Name', 'Project Type / Company', 'Message / Details']);
      // Bold the header row
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#0F1A36').setFontColor('#FFFFFF');
    }
    
    // Append rows depending on the payload type
    if (type === 'Newsletter') {
      sheet.appendRow([timestamp, type, email, 'Newsletter Subscriber', 'N/A', 'Opt-in for 2026 cost indices & building trends']);
      sendNotificationEmail(email, type, 'A new B2B user has successfully subscribed to the ApexVertex newsletter feed.');
    } else {
      sheet.appendRow([timestamp, type, email, name, projectType, message]);
      sendNotificationEmail(email, type, 'Name: ' + name + '\nProject/Company: ' + projectType + '\n\nScope & Geolocation details:\n' + message);
    }
    
    var response = { success: true, message: 'Row successfully appended to sheet.' };
    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST'
      });
      
  } catch (err) {
    var errResponse = { success: false, error: err.toString() };
    return ContentService.createTextOutput(JSON.stringify(errResponse))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST'
      });
  }
}

function sendNotificationEmail(senderEmail, type, bodyContent) {
  var adminEmail = 'info@yourcompany.com'; // CHANGE THIS TO YOUR BUSINESS EMAIL (e.g. newsletter@yourcompany.com)
  var subject = '🚨 ApexVertex Lead pipeline Alert: New ' + type + ' received';
  
  var htmlBody = '<div style="background-color:#070D1E; padding:30px; font-family:\'Outfit\', sans-serif; color:#F4F6FA; border-radius:8px; max-width:600px; margin:0 auto;">' +
                 '  <div style="text-align:center; margin-bottom:20px; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:20px;">' +
                 '    <h1 style="color:#FFFFFF; font-family:\'Space Grotesk\', sans-serif; font-size:24px; margin:0;">ApexVertex pipeline Notification</h1>' +
                 '  </div>' +
                 '  <div style="background-color:#0F1A36; padding:20px; border-radius:6px; border:1px solid rgba(255,255,255,0.08);">' +
                 '    <p style="margin-top:0; color:#8E9BB8; font-size:14px; text-transform:uppercase; font-weight:bold; letter-spacing:1px;">New B2B Lead Captured</p>' +
                 '    <p style="font-size:16px;"><strong>Type:</strong> <span style="color:#FF5722; font-weight:bold;">' + type + '</span></p>' +
                 '    <p style="font-size:16px;"><strong>Email:</strong> ' + senderEmail + '</p>' +
                 '    <hr style="border:none; border-top:1px solid rgba(255,255,255,0.08); margin:20px 0;">' +
                 '    <p style="font-weight:bold; margin-bottom:8px; color:#FFFFFF;">Details / Scope Payload:</p>' +
                 '    <pre style="background-color:#070D1E; padding:15px; border-radius:4px; border-left:4px solid #FF5722; white-space:pre-wrap; font-family:monospace; font-size:14px; color:#F4F6FA; margin:0;">' + bodyContent + '</pre>' +
                 '  </div>' +
                 '  <div style="text-align:center; margin-top:20px; font-size:12px; color:#8E9BB8;">' +
                 '    Sent securely via Google Sheets Webhook for Vercel. ApexVertex Construction &copy; 2026.' +
                 '  </div>' +
                 '</div>';
  
  try {
    MailApp.sendEmail({
      to: adminEmail,
      subject: subject,
      htmlBody: htmlBody
    });
  } catch (err) {
    Logger.log('Error sending notification email: ' + err.toString());
  }
}
