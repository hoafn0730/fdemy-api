const userService = require('~/services/userService');

class AuthController {
    getCurrentUser = async (req, res, next) => {
        return res.status(200).json({
            statusCode: 200,
            message: 'ok',
            data: req.user,
        });
    };
    updateProfile = async (req, res, next) => {
        console.log(req.file);
        if (req?.file) {
            req.body.avatar = 'http://localhost:5000/images/' + req.file.filename;
        }
        const data = await userService
            .update({
                data: req.body,
                where: { id: req.user.id },
            })
            .catch(next);

        res.io.emit('notification', { message: `Profile updated successfully.` });

        if (data.code !== 0) {
            return res.json(data);
        }

        return res.status(200).json(data);
    };
}

module.exports = new AuthController();
