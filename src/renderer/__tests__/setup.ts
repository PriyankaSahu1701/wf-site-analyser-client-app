import '@testing-library/jest-dom';
import { vi } from 'vitest';

import { installMockApi } from './helpers/ipc-mock';

installMockApi();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(() => vi.fn()),
  };
});

beforeEach(() => {
  vi.clearAllMocks();
});
