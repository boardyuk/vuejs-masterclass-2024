import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://vjchdhibyirugjuolwjw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqY2hkaGlieWlydWdqdW9sd2p3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1MzAwMjQsImV4cCI6MjA1MDEwNjAyNH0.OopQPt8z2UbzDkVCte134Eanw7vyhzis3_uJMF0Vf7Y',
)
