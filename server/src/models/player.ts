import { Pool } from 'pg'

const pool = new Pool({
    user: 'game_user',
    host: 'localhost',
    database: 'blockboy',
    password: process.env.DB_PASSWORD,
    port: 5432,
})

export async function getPlayerData(playerId: string) {
    const res = await pool.query('SELECT * FROM players WHERE id = $1', [playerId])
    return res.rows[0]
}