import bcrypt from 'bcryptjs'

import { initializeUserDb, userDb } from '../schemas/user'

export async function intializeData() {

  await initializeUserDb()

  const dbEmpty = (await userDb().countAsync({}) === 0)

  if (dbEmpty) {
    const adminEmail = process.env.ADMIN_EMAIL ?? 'admin@example.com'
    const adminPassword = process.env.ADMIN_PASSWORD
    if (!adminPassword) {
      throw new Error('ADMIN_PASSWORD environment variable is not set')
    }
    await userDb().insertAsync({
      email: adminEmail,
      passwordHash: bcrypt.hashSync(adminPassword),
      savedTeams: [],
      savedDrivers: [],
      savedVehicles: []
    })

  }
}