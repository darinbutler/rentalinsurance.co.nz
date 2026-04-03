const APIFY_TOKEN = process.env.APIFY_API_TOKEN;

let client: any = null;

async function initializeApifyClient() {
  if (APIFY_TOKEN && !client) {
    try {
      const apifyModule = await import('apify-client');
      const ApifyClient = (apifyModule as any).ApifyClient || apifyModule;
      client = new ApifyClient({
        token: APIFY_TOKEN,
      });
    } catch (error) {
      console.error('Failed to initialize Apify client:', error);
    }
  }
}

export async function scrapeWebsite(url: string): Promise<string> {
  if (!client) {
    await initializeApifyClient();
  }

  if (!client) {
    throw new Error('Apify API token not configured');
  }

  try {
    const run = await client.actor('apify/web-scraper').call({
      startUrls: [{ url }],
      useChrome: true,
      maxPagesPerCrawl: 1,
    });

    const dataset = await client.dataset(run.defaultDatasetId).listItems();
    return JSON.stringify(dataset.items);
  } catch (error) {
    console.error('Error scraping with Apify:', error);
    throw error;
  }
}

export function isApifyConfigured(): boolean {
  return !!APIFY_TOKEN;
}
