'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('buku', [{
      "IDBuku": 111,
      "JudulBuku": "Rekayasa Perangkat Lunak",
      "Pengarang": "Mohammad Radja",
      "Kategori": "Buku Pengetahuan Teknologi",
      "Penerbit": "PT Gramedia Media Pustaka",
      "Tahun": "2021-01-01",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('buku', null, {});
  }
};
