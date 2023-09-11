import { AppError } from "../errors";
import { RealEstateCreate } from "../interfaces";
import {
  addressRepository,
  categoryRepository,
  realEstateRepository,
} from "../repositories";

const create = async (payload: RealEstateCreate) => {
  const category = await categoryRepository.findOneBy({
    id: payload.categoryId,
  });

  if (!category) throw new AppError("Category not found", 404);

  const addressBody = payload.address;
  const address = addressRepository.create(addressBody);
  await addressRepository.save(address);

  const realEstateBody = {
    ...payload,
    address: address,
    category: category,
  };

  const realEstate = realEstateRepository.create(realEstateBody);
  await realEstateRepository.save(realEstate);
  return realEstate;
};

const read = async () => {
  const realEstates = await realEstateRepository.find({
    relations: { address: true },
  });
  return realEstates;
};

export default { create, read };
