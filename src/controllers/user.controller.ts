import type { Request, Response } from "express";
import { userService } from "../services/user.service";

export const userController = {
  create: async (req: Request, res: Response) => {
    try {
      const userData = req.body;
      const user = await userService.create(userData);
      res.status(201).json({
        message: "Tạo user thành công",
        data: user,
      });
    } catch (error: any) {
      res.status(400).json({
        message: "User đã tồn tại",
        error: error.message,
      });
    }
  },
  search: async (req: Request, res: Response) => {
    try {
      const keyword: string = req.query.username as string;

      if (!keyword) {
        return res.status(400).json({
          message: "Nội dung tìm kiếm không được để trống",
        });
      }

      const users = await userService.search(keyword);
      res.status(200).json({
        message: "Tìm kiếm thành công",
        data: users,
      });
    } catch (error: any) {
      res.status(404).json({
        message: "User không tồn tại",
        error: error.message,
      });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await userService.update(req.body, +id!);

      res.status(200).json({
        message: "Cập nhật user thành công",
        data: user,
      });
    } catch (error: any) {
      res.status(404).json({
        message: "User không tồn tại",
        error: error.message,
      });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await userService.delete(+id!);

      res.status(200).json({
        message: "Xóa user thành công",
        data: user,
      });
    } catch (error: any) {
      res.status(404).json({
        message: "Dữ liệu request không hợp lệ",
        error: error.message,
      });
    }
  },
};
