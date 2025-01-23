// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
  provider: 'openai' | 'anthropic' | 'together';
}

export const models: Array<Model> = [
  {
    id: 'gpt-4o-mini',
    label: 'GPT 4o mini',
    apiIdentifier: 'gpt-4o-mini',
    description: 'Small model for fast, lightweight tasks',
    provider: 'openai'
  },
  {
    id: 'gpt-4o',
    label: 'GPT 4o',
    apiIdentifier: 'gpt-4o',
    description: 'For complex, multi-step tasks',
    provider: 'openai'
  },
  {
    id: 'claude-3-5-sonnet',
    label: 'Claude 3.5 Sonnet',
    apiIdentifier: 'claude-3-5-sonnet-20241022',
    description: 'Anthropic\'s Claude 3.5 Sonnet - Fast and capable model',
    provider: 'anthropic'
  },
  {
    id: 'llama-3.1',
    label: 'Llama 3.1',
    apiIdentifier: 'meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo-128K',
    description: 'Meta\'s Llama 3.1 - Open source model',
    provider: 'together'
  }
] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4o-mini';
