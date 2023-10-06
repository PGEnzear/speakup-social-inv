import { injectable } from "inversify";

import nodemailer from "nodemailer";

import config from "../../config";

import "reflect-metadata";

@injectable()
export class MailService {
	public mailer: nodemailer.Transporter;

	public readonly mail_address: string;
	public readonly mail_service: string;

	private readonly mail_password: string;

	constructor(
		mail_address?: string,
		mail_password?: string,
		mail_service?: string,
	) {
		this.mail_address = mail_address || config.MAIL.MAIL_ADDRESS;
		this.mail_service = mail_service || config.MAIL.MAIL_SERVICE;
		this.mail_password = mail_password || config.MAIL.MAIL_PASSWORD;

		this.mailer = nodemailer.createTransport({
			service: this.mail_service,
			auth: {
				user: this.mail_address,
				pass: this.mail_password,
			},
		});
	}

	public sendVerificationURL(mail: string, code: string) {}

	public sendMail(to: string) {
		this.mailer.sendMail({});
	}
}
