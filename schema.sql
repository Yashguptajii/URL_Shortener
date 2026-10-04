CREATE table link (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID DEFAULT gen_random_uuid() UNIQUE,
    longurl text not NULL,
    shorturl text not null unique,
    count int DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP DEFAULT NULL
)
