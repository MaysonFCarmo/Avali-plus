
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

// Diagnóstico: não mostra os valores das chaves
console.log('URL configurada:', Boolean(supabaseUrl))
console.log('Chave pública configurada:', Boolean(supabaseKey))

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
