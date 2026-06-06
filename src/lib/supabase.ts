// Configuration Supabase pour une future V2
// Pour le moment, l'application fonctionne entièrement en local avec localStorage.
//
// Pour activer Supabase :
// 1. Installer le package : npm install @supabase/supabase-js
// 2. Créer un projet sur supabase.com
// 3. Copier .env.example vers .env.local et renseigner les clés
// 4. Décommenter le code ci-dessous
// 5. Créer les tables suivantes :
//
// CREATE TABLE birds (
//   id TEXT PRIMARY KEY,
//   slug TEXT UNIQUE NOT NULL,
//   name_fr TEXT NOT NULL,
//   name_latin TEXT NOT NULL,
//   family TEXT NOT NULL,
//   rarity_local TEXT NOT NULL,
//   habitats TEXT[] NOT NULL,
//   seasons TEXT[] NOT NULL,
//   best_moment TEXT,
//   emotional_tag TEXT,
//   short_description TEXT,
//   long_description TEXT,
//   identification_tips TEXT[],
//   where_to_look TEXT,
//   local_note TEXT,
//   responsible_note TEXT,
//   created_at TIMESTAMPTZ DEFAULT NOW()
// );
//
// CREATE TABLE bird_memories (
//   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
//   user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
//   bird_id TEXT NOT NULL,
//   status TEXT NOT NULL DEFAULT 'unknown',
//   first_seen_at TIMESTAMPTZ,
//   place_name TEXT,
//   personal_note TEXT,
//   mood TEXT,
//   updated_at TIMESTAMPTZ DEFAULT NOW(),
//   UNIQUE(user_id, bird_id)
// );
//
// CREATE TABLE profiles (
//   id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
//   display_name TEXT,
//   created_at TIMESTAMPTZ DEFAULT NOW()
// );

// --- Code Supabase (décommenter quand prêt) ---
// import { createClient } from "@supabase/supabase-js";
//
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
//
// export const supabase =
//   supabaseUrl && supabaseAnonKey
//     ? createClient(supabaseUrl, supabaseAnonKey)
//     : null;

// Pour la V1 : client null (localStorage uniquement)
export const supabase = null;

// Helper pour vérifier si Supabase est configuré
export const isSupabaseConfigured = (): boolean => {
  return supabase !== null;
};
