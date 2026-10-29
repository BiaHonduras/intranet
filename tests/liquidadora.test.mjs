import test from 'node:test';
import assert from 'node:assert/strict';
import {ROLES,profileApplications} from '../intranet-users.mjs';
import {applicationsFor} from '../intranet-apps.mjs';
test('Liquidadora solo admite Devoluciones',()=>{assert.ok(ROLES.some(r=>r[0]==='liquidadora'));assert.deepEqual(profileApplications('liquidadora',['tiempos','inventarios']),['devoluciones']);assert.deepEqual(applicationsFor(['SPS'],['devoluciones'],'devoluciones').map(a=>a.id),['devoluciones'])});
test('Otros perfiles conservan sus aplicaciones',()=>assert.deepEqual(profileApplications('coordinador',['preventa','devoluciones']),['preventa','devoluciones']));
