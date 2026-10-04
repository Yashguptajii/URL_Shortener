CREATE TABLE IF NOT EXISTS links (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID,
    long_url TEXT NOT NULL,
    short_url TEXT NOT NULL UNIQUE,
    clicks INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMPTZ DEFAULT (CURRENT_TIMESTAMP + INTERVAL '10 days')
);

CREATE INDEX IF NOT EXISTS idx_link ON links(short_url);
