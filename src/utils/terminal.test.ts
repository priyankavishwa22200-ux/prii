import test from 'node:test';
import assert from 'node:assert/strict';
import { executeTerminalCommand } from './terminal';
import { developerProfile, skillsData, projectsData } from '../data/portfolioData';

test('executeTerminalCommand handles help command', () => {
  const result = executeTerminalCommand('help', developerProfile, skillsData, projectsData);
  assert.ok(result.lines.length >= 5);
  assert.ok(result.lines.some(l => l.text.includes('whoami')));
});

test('executeTerminalCommand handles whoami command', () => {
  const result = executeTerminalCommand('whoami', developerProfile, skillsData, projectsData);
  assert.ok(result.lines.some(l => l.text.includes(developerProfile.name)));
  assert.ok(result.lines.some(l => l.text.includes(developerProfile.role)));
});

test('executeTerminalCommand handles clear command', () => {
  const result = executeTerminalCommand('clear', developerProfile, skillsData, projectsData);
  assert.equal(result.clearRequested, true);
  assert.equal(result.lines.length, 0);
});

test('executeTerminalCommand returns error message on unknown command', () => {
  const result = executeTerminalCommand('fly-to-mars', developerProfile, skillsData, projectsData);
  assert.equal(result.lines[0].type, 'error');
  assert.ok(result.lines[0].text.includes('command not found'));
});
