'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class anggota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      anggota.hasMany(models.peminjaman,{
        as:"peminjaman",
        foreignKey:"IDAnggota",
        onDelete: "CASCADE"
      });
    }
  }
  anggota.init({
    IDAnggota: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    Nama: {
      allowNull: false,
      type: DataTypes.STRING
    },
    Jurusan: {
      allowNull: false,
      type: DataTypes.STRING
    },
    MasaBerlaku: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'anggota',
  });
  return anggota;
};