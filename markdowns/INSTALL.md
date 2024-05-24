# Deploy Flask to Azure with Git & CI/CD

## Installation

1.  **Prepare Your Flask App:**

    - Ensure your Flask app is ready with a `requirements.txt` file.

    - Include `gunicorn` in `requirements.txt`.

2.  **Push Your Code to a Git Repository:**

    - If you haven’t already, create a Git repository (e.g., on GitHub, GitLab, Bitbucket, or Azure Repos).

    - Push your Flask app code to the repository.

3.  **Log in to Azure Portal:**

    - Go to the [Azure Portal](https://portal.azure.com/).

    - Sign in with your Azure account.

4.  **Create a Resource Group:**

    - In the Azure Portal, search for **Resource Groups** in the search bar.

    - Click **Create** to create a new resource group.

    - Provide a name and select a region (e.g., East US).

5.  **Create an App Service Plan:**

    - In the Azure Portal, search for **App Service Plans**.

    - Click **Create** to create a new App Service Plan.

    - Fill in the details:

      - **Subscription**: Select your subscription.

      - **Resource Group**: Select the resource group you created earlier.

      - **Name**: Give your App Service Plan a name.

      - **Operating System**: Choose **Linux**.

      - **Region**: Select a region (e.g., East US).

      - **Pricing Tier**: Choose a plan (e.g., **B1** for basic tier).

    - Click **Review + Create**, then **Create**.

6.  **Create a Web App:**

    - In the Azure Portal, search for **App Services**.

    - Click **Create** to create a new Web App.

    - Fill in the details:

      - **Subscription:** Select your subscription.

      - **Resource Group:** Select the resource group you created earlier.

      - **Name:** Give your Web App a unique name (e.g., `myflaskapp.azurewebsites.net`).

      - **Publish:** Choose **Code**.

      - **Runtime Stack:** Select **Python 3.x** (e.g., Python 3.9).

      - **Operating System:** Choose **Linux**.

      - **Region:** Select the same region as your App Service Plan.

      - **App Service Plan:** Select the App Service Plan you created earlier.

    - Click **Review + Create**, then **Create**.

7.  **Set Up Continuous Deployment from Git:**

    - Once the Web App is created, go to the **App Service** resource in the Azure Portal.

    - In the left-hand menu, go to **Deployment Center**.

    - Under **Source**, select your Git provider (e.g., GitHub, GitLab, Bitbucket, or Local Git).

    - Authenticate with your Git provider and select the repository and branch you want to deploy from.

    - Click **Save**.

8.  **Configure Gunicorn:**

    - In the Azure Portal, go to your App Service resource.

    - In the left-hand menu, go to **Configuration**.

    - Under **General Settings**, find the **Startup Command** field.

    - Enter the Gunicorn command to run your app:

      ```bash
      gunicorn --bind 0.0.0.0 app:app
      ```

    - Ensure your Flask app includes the following:

      ```python
      app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
      ```

    - Click **Save**.

9.  **Access Your App:**

    - Once deployed, your app will be accessible at:

      ```bash
      https://myflaskapp.azurewebsites.net
      ```

    - You can find the URL in the **Overview** section of your App Service resource.

## How?'s

1. Push your Flask app code to a GitHub repository.

2. In Azure App Service, connect the repository to your Web App.

3. Make changes to your Flask app and push a new commit to the `main` branch.

4. Azure will automatically pull the changes and redeploy your app.

## Why?'s

- **Automated Deployments**: No need to manually upload code.

- **Version Control**: Track changes and roll back if needed.

- **Collaboration**: Multiple developers can work on the same codebase.

- **CI/CD Integration**: You can integrate with Azure DevOps or other CI/CD tools for advanced workflows.
