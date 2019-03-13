module.exports = (sequelize, Sequelize) => {
	const Message = sequelize.define('content', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		user_name: Sequelize.STRING,
		message_content: Sequelize.STRING,
		time_send_message: Sequelize.STRING
	});

	return Message;
}