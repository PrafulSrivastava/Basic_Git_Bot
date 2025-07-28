# Basic GitHub Bot

A simple Probot-based GitHub App that responds to issue comments.

## Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**

   Copy the example environment file and fill in your values:
   ```sh
   cp .env.example .env
   ```

   Edit `.env` and set the following variables:

   | Variable         | Description                                                                 |
   |------------------|-----------------------------------------------------------------------------|
   | `APP_ID`         | The App ID from your GitHub App settings                                    |
   | `PRIVATE_KEY`    | The contents of your GitHub App's private key (can be a file path or string)|
   | `WEBHOOK_SECRET` | The webhook secret you set when creating the GitHub App                     |
   | `LOG_LEVEL`      | (Optional) Logging level (e.g., `info`, `debug`)                            |

   (Optional for OAuth)

   | Variable              | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| `GITHUB_CLIENT_ID`    | (Optional) Client ID from your GitHub App's OAuth credentials               |
| `GITHUB_CLIENT_SECRET`| (Optional) Client Secret from your GitHub App's OAuth credentials           |

   Example `.env`:
   ```
   APP_ID=12345
   PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEA..."
   WEBHOOK_SECRET=yourwebhooksecret
   LOG_LEVEL=info
   ```

   > **Tip:** If using a file for `PRIVATE_KEY`, use the path:  
   > `PRIVATE_KEY=./private-key.pem`

4. **Run the bot locally:**
   ```sh
   npm start
   ```

5. **Deploy or use with Docker as needed.**

## Additional Resources

- [Probot Documentation](https://probot.github.io/docs/)
- [Creating a GitHub App](https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app)
