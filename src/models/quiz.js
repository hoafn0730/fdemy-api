'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Quiz extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.Answer, { foreignKey: 'quizId', as: 'answers' });
        }
    }
    Quiz.init(
        {
            lessonId: DataTypes.INTEGER,
            title: DataTypes.STRING,
            content: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'Quiz',
        },
    );
    return Quiz;
};
