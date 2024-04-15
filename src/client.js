import { createClient } from '@supabase/supabase-js'


const URL = 'https://yykqylnygbcufvejvwdm.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5a3F5bG55Z2JjdWZ2ZWp2d2RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4Njc5MTAsImV4cCI6MjAyODQ0MzkxMH0.kSbFLga4-altTzkKGRGldhCtRTp_vLF9ZXppzcEo6a0';

export const supabase = createClient(URL, API_KEY);

