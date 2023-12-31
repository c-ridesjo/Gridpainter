import { resetDraw } from "../services/draw.service";
import asyncHandler from 'express-async-handler';

export const reset = asyncHandler(async (req, res) => {
	try {
		resetDraw(req.app.locals.socketIo);
	} catch (error) {
		res.status(500).json({ message: 'internal server error', error: error })
	}
});