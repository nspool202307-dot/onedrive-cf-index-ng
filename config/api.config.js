/**
 * This file contains the configuration for the API endpoints and tokens we use.
 * NOTE: client_id and client_secret are hardcoded here to bypass environment variable injection issues in Cloudflare Pages.
 */
module.exports = {
  // 您的正確 CLIENT_ID 和 CLIENT_SECRET (硬編碼)
  client_id: 'f20fcec1-00d0-4811-b5a0-7260dffe1728',
  client_secret: 'Ns18Q~e7b.D4E00pX5oZGSYi71D0epY.kfRlEbha',

  // Redirect URI (Step 1/3 頁面顯示的值)
  redirectUri: 'http://localhost',

  // API 端點
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

  // 權限範圍
  scope: 'user.read files.read.all offline_access',

  // 快取設定
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',

  // !!! 這是處理 Step 3/3 UPN 錯誤的關鍵 !!!
  // 如果程式碼允許修改 UPN 檢查邏輯，請將此行改為您登入的 Email
  // (但由於我們不能確定您的程式碼是否會讀取這個變數，我們先保持預設)
  userPrincipalName: 'nspool@vvwls.onmicrosoft.com', 
};
