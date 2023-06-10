import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CreateDemoDto } from './dto/create-demo.dto';
import { UpdateDemoDto } from './dto/update-demo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Demo } from './schemas/demo.schema';
import { Cache } from 'cache-manager';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class DemoService {
  constructor(
    @InjectModel(Demo.name) private demoModel: Model<Demo>,
    private cacheService: CacheService
  ) {

  }
  async create(createDemoDto: CreateDemoDto): Promise<Demo> {
    const createdDemo = new this.demoModel(createDemoDto);
    return createdDemo.save();
  }

  async findAll(): Promise<object> {
    try {
      const cachedData = await this.cacheService.get('demo_data');
      console.log({cachedData});
      if (cachedData) {
        // Data found in cache, set fromCache to true
        return {  cachedData, fromCache: true };
      }

      const data = await this.demoModel.find({}, { _id: 1, name: 1, age: 1, gender: 1, email: 1 }).exec();
      // Cache the data for future use

      await this.cacheService.set('demo_data', JSON.stringify(data));
      // Set fromCache to false for newly fetched data
      return { data, fromCache: false };
    } catch (e) {
      console.log(e);
    }

  }

  findOne(id: number) {
    return `This action return a #${id} demo`;
  }

  update(id: number, updateDemoDto: UpdateDemoDto) {
    return `This action updates a #${id} demo`;
  }

  remove(id: number) {
    return `This action removes a #${id} demo`;
  }
}