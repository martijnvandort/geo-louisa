import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

export function supabaseCredentials() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() ||
    "";
  return { url, key };
}

export function isMultiplayerConfigured(): boolean {
  const { url, key } = supabaseCredentials();
  return Boolean(url && key);
}

export function getSupabase(): SupabaseClient | null {
  const { url, key } = supabaseCredentials();
  if (!url || !key) return null;
  if (!client) {
    client = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      realtime: { params: { eventsPerSecond: 12 } },
    });
  }
  return client;
}

export function mapboxToken(): string {
  return process.env.NEXT_PUBLIC_MAPBOX_TOKEN?.trim() ?? "";
}

export function basemapLabel(): string {
  return mapboxToken() ? "Mapbox light" : "Pastel political";
}
