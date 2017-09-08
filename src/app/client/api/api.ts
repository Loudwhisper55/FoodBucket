export * from './auth.service';
import { AuthService } from './auth.service';
export * from './cart.service';
import { CartService } from './cart.service';
export * from './category.service';
import { CategoryService } from './category.service';
export * from './contacts.service';
import { ContactsService } from './contacts.service';
export * from './ingredient.service';
import { IngredientService } from './ingredient.service';
export * from './order.service';
import { OrderService } from './order.service';
export * from './product.service';
import { ProductService } from './product.service';
export * from './promotion.service';
import { PromotionService } from './promotion.service';
export * from './toprated.service';
import { TopratedService } from './toprated.service';
export const APIS = [AuthService, CartService, CategoryService, ContactsService, IngredientService, OrderService, ProductService, PromotionService, TopratedService];
