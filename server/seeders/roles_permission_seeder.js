// seed.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import Permission from '../models/permissions.js';
import Role from '../models/roles.js';
import User from '../models/users.js';

async function seedData() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/stylvx');

    // Clear existing data (optional)
    await Permission.deleteMany({});
    await Role.deleteMany({});
    await User.deleteMany({});

    // Create Permissions
    const readPermission = new Permission({ name: 'read' });
    const writePermission = new Permission({ name: 'write' });
    const deletePermission = new Permission({ name: 'delete' });

    await readPermission.save();
    await writePermission.save();
    await deletePermission.save();

    // Retrieve permissions
    const permissions = await Permission.find();

    // Create Roles
    const adminRole = new Role({ 
      name: 'admin', 
      permissions: permissions.map(p => p._id) // Assign all permissions to admin
    });

    const bloggerRole = new Role({ 
      name: 'blogger', 
      permissions: permissions.map(p => p._id) // Assign all permissions to blogger
    });

    const userRole = new Role({ 
      name: 'user', 
      permissions: [permissions.find(p => p.name === 'read')._id] // Assign only 'read' permission to user
    });

    await adminRole.save();
    await bloggerRole.save();
    await userRole.save();

    // Retrieve roles
    const roles = await Role.find();

    // Create Users
    const adminRoleId = roles.find(role => role.name === 'admin')._id;
    const bloggerRoleId = roles.find(role => role.name === 'blogger')._id;
    const userRoleId = roles.find(role => role.name === 'user')._id;

    
    // Optionally create Users
    const password = 'admin@123';
    const hash = await bcrypt.hash(password,10);

    const adminUser = new User({
      firstname: 'admin',
      lastname: 'user',
      email: 'admin@mail.com',
      password: hash,
      role: [adminRoleId]
    });
 
    const bloggerUser = new User({
      firstname: 'blogger',
      lastname: 'user',
      email: 'salik@mailinator.com',
      password: hash,
      role: [bloggerRoleId]
    });
 
    const normalUser = new User({
        firstname: 'Waqas',
        lastname: 'Arif',
        email: 'waqas77@mailinator.com',
        password: hash,
        role: [userRoleId]
      });

        await adminUser.save();
        await bloggerUser.save();
        await normalUser.save();

    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Error seeding the database:', err);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
}

seedData();
