import { resend } from "../lib/resend";
import VerificationEmail from "../email/VerificationEmail";
import { ApiResponse } from "../types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string,
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Verification code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: "Verification email sent." };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      message: "An error occurred while sending the verification email.",
    };
  }
}
