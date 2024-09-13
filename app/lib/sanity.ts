import { createClient } from "next-sanity";

const projectId = "sy2uq1ak";
const dataset = "production";
const apiVersion = "2024-09-12";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true ,

}) ;



