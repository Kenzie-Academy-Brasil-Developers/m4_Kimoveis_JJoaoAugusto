import { Category } from "../entities";
import { categoryRepository } from "../repositories";
import { CategoryCreate, CategoryRead } from "../interfaces";
import { AppError } from "../errors";

const create = async (payload: CategoryCreate): Promise<Category> => {
  const category = categoryRepository.create(payload);
  await categoryRepository.save(category);
  return category;
};

const read = async (): Promise<CategoryRead> => {
  const categories: CategoryRead = await categoryRepository.find();
  return categories;
};

const retrieve = async (id: number): Promise<Category> => {
  const category: Category | null = await categoryRepository.findOne({
    where: { id: id },
    relations: ["realEstate"],
  });

  if (!category) {
    throw new AppError("category not found", 404);
  }

  return category;
};

export default { create, read, retrieve };
