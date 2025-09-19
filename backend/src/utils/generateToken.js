import jwt from 'jsonwebtoken';

export const generateAccessToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '15m'
    });
};

export const generateRefreshToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET, {
        expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d'
    });
};

export const verifyToken = (token, secret = process.env.JWT_SECRET) => {
    return jwt.verify(token, secret);
};