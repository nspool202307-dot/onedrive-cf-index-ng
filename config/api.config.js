/**
 * This file contains the configuration for the API endpoints and tokens we use.
 *
 * NOTE: The client_id and client_secret MUST be set here because Cloudflare Pages
 * is failing to inject environment variables into Next.js build process.
 * These values MUST match your Azure App Registration settings.
 */
module.exports = {
  // 設定一：Client ID 和 Secret (已用您的正確值替換)
  client_id: 'f20fcec1-00d0-4811-b5a0-7260dffe1728',
  client_secret: 'U2FsdGVkX19JieV7uvU+DbFRMgZgXEVnG5HZY46uY/rApBcJA5lpduEU1IKLvI9V4ZQK3FxsHpWx5uhe3xZ2SQ==',

  // 設定二：重新導向 URI (這是 Step 1/3 頁面顯示的值)
  // 警告：Azure App Registration 上的 'Redirect URI' 必須設定為您的實際 pages.dev 網址
  redirectUri: 'http://localhost',

  // 設定三：OneDrive API 端點
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

  // 設定四：權限範圍
  scope: 'user.read files.read.all offline_access',

  // 設定五：快取 (通常不需更動)
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
};
