'use strict';
const bcrypt = require('bcrypt');
const saltRound = 10;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('Radja12345', saltRound);
    return queryInterface.bulkInsert(
      "petugas",
      [
          {
              Nama: "Radja",
              Username: "MohammadRadja28",
              Password: hashedPassword,
              isAdmin: true,
              createdAt: new Date(),
              updatedAt: new Date(),
          },
      ],
      {}
  );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("petugas", null, {});
  }
};
