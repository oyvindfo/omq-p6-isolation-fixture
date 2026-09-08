import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
test('qualification: control-plane secrets and Azure workload identity are absent', () => {
 const denied = ['DATABASE_URL','WEB_SESSION_KEY','GITHUB_CLIENT_SECRET','GITHUB_WEBHOOK_SECRET','ORIENT_QUEUE_APP_PRIVATE_KEY','ORIENT_QUEUE_INSTALLATION_TOKEN','ORIENT_QUEUE_DATABASE_URL','ORIENT_QUEUE_WEBHOOK_SECRET','IDENTITY_ENDPOINT','IDENTITY_HEADER','MSI_ENDPOINT','MSI_SECRET','AZURE_FEDERATED_TOKEN_FILE','ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
 for (const name of [...denied,...Object.keys(process.env).filter(k => k.startsWith('OMQ_APP_KEY_'))]) assert.ok(!process.env[name], 'unexpected privileged variable: '+name);
 const config = spawnSync('git',['config','--local','--name-only','--get-regexp','http.*extraheader'],{encoding:'utf8'});
 assert.equal(config.status,1,'checkout retained HTTP credentials');
});
