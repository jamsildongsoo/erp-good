//apps/backend/src/user/dto/create-user.dto.ts
import { IsString, IsEmail, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: '회사 ID는 필수입니다.' })
  @MaxLength(50)
  companyId!: string;

  @IsString()
  @IsNotEmpty({ message: '사용자 ID는 필수입니다.' })
  @MaxLength(50)
  userId!: string;

  @IsString()
  @MaxLength(100)
  userName!: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  address?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  deptId?: string;

  @IsEmail({}, { message: '올바른 이메일 형식이어야 합니다.' })
  @MaxLength(100)
  email!: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  phoneNumber?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  title?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  position?: string;

  @IsString()
  @IsNotEmpty({ message: '비밀번호는 필수입니다.' })
  @MaxLength(100)
  password!: string;
}
