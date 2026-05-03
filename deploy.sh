#!/bin/bash

# Configuration
PROJECT_ID="gen-lang-client-0001412957"
SERVICE_NAME="elect1-guide"
REGION="us-central1"

echo "🚀 Starting deployment for $SERVICE_NAME to project $PROJECT_ID..."

# 1. Ensure you are authenticated and project is set
# gcloud auth login
# gcloud config set project $PROJECT_ID

# 2. Build and Deploy to Cloud Run
# We use --source . to let Google Cloud handle the Docker build (Cloud Build) automatically
gcloud run deploy $SERVICE_NAME \
  --source . \
  --project $PROJECT_ID \
  --region $REGION \
  --allow-unauthenticated \
  --set-env-vars="NODE_ENV=production"

echo "✅ Deployment attempt finished."
