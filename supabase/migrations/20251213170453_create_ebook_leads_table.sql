/*
  # Create ebook leads table

  ## Description
  Creates a table to store leads from the exit-intent eBook popup.
  Captures visitor information when they request the free restaurant marketing eBook.

  ## New Tables
  - `ebook_leads`
    - `id` (uuid, primary key) - Unique identifier for each lead
    - `full_name` (text, required) - Full name of the lead
    - `email` (text, required) - Email address of the lead
    - `phone` (text, required) - Phone number of the lead
    - `created_at` (timestamptz) - Timestamp when the lead was captured
    - `ip_address` (text, optional) - IP address of the visitor for analytics
    - `user_agent` (text, optional) - Browser user agent for analytics

  ## Security
  - Enable RLS on `ebook_leads` table
  - No public read access (leads are sensitive business data)
  - Service role can insert and read (for backend operations)

  ## Indexes
  - Index on email for duplicate checking
  - Index on created_at for time-based queries
*/

CREATE TABLE IF NOT EXISTS ebook_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  created_at timestamptz DEFAULT now(),
  ip_address text,
  user_agent text
);

ALTER TABLE ebook_leads ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS ebook_leads_email_idx ON ebook_leads(email);
CREATE INDEX IF NOT EXISTS ebook_leads_created_at_idx ON ebook_leads(created_at DESC);

COMMENT ON TABLE ebook_leads IS 'Stores leads captured from the exit-intent eBook popup';
