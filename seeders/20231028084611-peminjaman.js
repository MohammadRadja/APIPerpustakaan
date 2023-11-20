'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('peminjaman', [{
      "JudulBuku": "Rekayasa Perangkat Lunak",
      "TanggalPinjam": "2023-09-28",
      "TanggalKembali": "2023-12-28",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('peminjaman', null, {});
  }
};
