'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petugas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  petugas.init({
    Nama: {
      allowNull: false,
      type: DataTypes.STRING,
      },
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Username sudah di gunakan",
      },
      // Memastikan username hanya mengandung huruf dan angka
      isAlphanumeric: {
        args: true,
        msg: "Username harus mengandung huruf dan angka!"
      },
      // Memastikan panjang username tidak boleh boleh kurang dari 8 karakter
      min: {
        args: 8,
        msg: "Password minimal 8 karakter",
      },
  },
    Password: {
    allowNull: false,
    type: DataTypes.TEXT,
    validate: {
        is: {
            args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            // Validasi yang memerlukan setidaknya 8 karakter, satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus.
            msg: "Password memerlukan setidaknya 8 karakter, satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus!"
        },
    },
},
    isAdmin: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
},
{
    sequelize,
    modelName: 'petugas',
  });
  return petugas;
};