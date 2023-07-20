import { createClient } from "@sanity/client";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "../config";
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    useCdn: true,
    apiVersion: '2023-07-20'
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: string) => builder.image(source);
