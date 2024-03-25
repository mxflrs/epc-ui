import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientConfig, SanityClient, createClient } from '@sanity/client';
import { environment } from '../../../environment/environment';
import { Faq } from '../../../domain/faq';

@Injectable({
  providedIn: 'root',
})

export class CmsService {
  // private client: SanityClient;

  private clientConfig: ClientConfig = {
    projectId: environment.sanity.projectId,
    dataset: environment.sanity.dataset,
    apiVersion: environment.sanity.apiVersion,
    useCdn: environment.sanity.useCdn,
  };

  constructor() {
    // this.client = this.sanityClient();
  }

  private sanityClient(): SanityClient {
    return createClient(this.clientConfig);
  }

  async getAllPosts(): Promise<Faq[]> {
    return await this.sanityClient().fetch(
      '*[_type == "faq"]'
    );
  }
}
