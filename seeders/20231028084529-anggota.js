'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('anggota', [{
        "Nama": "Risma Ayu",
        "Jurusan": "Teknik Informatika",
        "MasaBerlaku": "2024-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('anggota', null, {});
  }
};
