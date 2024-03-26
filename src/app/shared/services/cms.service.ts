import { Injectable } from '@angular/core';
import { ClientConfig, SanityClient, createClient } from '@sanity/client';
import { environment } from '../../../environment/environment';
import { Faq } from '../../../domain/faq';

@Injectable({
  providedIn: 'root',
})

export class CmsService {

  private clientConfig: ClientConfig = {
    projectId: environment.sanity.projectId,
    dataset: environment.sanity.dataset,
    apiVersion: environment.sanity.apiVersion,
    useCdn: environment.sanity.useCdn,
  };

  #sanityClient(): SanityClient {
    return createClient(this.clientConfig);
  }

  async getFaq(): Promise<Faq[]> {
    return await this.#sanityClient().fetch(
      '*'
    );
  }
}
