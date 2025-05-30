import { updateSubscriptionValidator } from "../../validators/subscriptionValidator";
import { validateRequest } from "../../middlewares/validateRequest";
import { Router } from "express";
import {
  getMySubscription,
  updateSubscription,
} from "../../controllers/subscriptionController.ts";
import { authenticate, authorizeOwner } from "../../middlewares/authMiddleware";

const router = Router();

router.patch(
  "/change",
  authenticate,
  authorizeOwner,
  updateSubscriptionValidator,
  validateRequest,
  updateSubscription
);

router.get(
  "/",
  authenticate,
  authorizeOwner,
  getMySubscription
);

export default router;
