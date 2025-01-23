import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { togetherai } from '@ai-sdk/togetherai';

import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';
import { Model } from './models';

export const customModel = (model: Model) => {
  let provider;
  switch (model.provider) {
    case 'openai':
      provider = openai(model.apiIdentifier);
      break;
    case 'anthropic':
      provider = anthropic(model.apiIdentifier);
      break;
    case 'together':
      provider = togetherai(model.apiIdentifier);
      break;
    default:
      throw new Error(`Unsupported provider: ${model.provider}`);
  }

  return wrapLanguageModel({
    model: provider,
    middleware: customMiddleware,
  });
};

export const imageGenerationModel = openai.image('dall-e-3');
