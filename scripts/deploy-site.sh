#!/usr/bin/env bash
set -euo pipefail

HOST="49.232.197.82"
USER="ubuntu"
KEY="${HOME}/.ssh/tencent_stock_dashboard_ed25519"
REMOTE_DIR="/var/www/personal-website"
ARCHIVE="/tmp/by-personal-website-out.tar.gz"

npm run build
COPYFILE_DISABLE=1 tar --no-xattrs -czf "${ARCHIVE}" out

scp -i "${KEY}" "${ARCHIVE}" "${USER}@${HOST}:${ARCHIVE}"
ssh -i "${KEY}" "${USER}@${HOST}" "
  set -e
  sudo rm -rf '${REMOTE_DIR}'
  sudo mkdir -p '${REMOTE_DIR}'
  sudo tar -xzf '${ARCHIVE}' -C '${REMOTE_DIR}' --strip-components=1
  sudo find '${REMOTE_DIR}' -name '._*' -delete
  sudo chown -R www-data:www-data '${REMOTE_DIR}'
  sudo nginx -t
  sudo systemctl reload nginx
"

echo "Deployed to ${REMOTE_DIR} on ${HOST}"
