/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EnumAppointmentStatus } from "./EnumAppointmentStatus";
import { VehicleWhereUniqueInput } from "../../vehicle/base/VehicleWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../../service/base/ServiceWhereUniqueInput";
import { MechanicWhereUniqueInput } from "../../mechanic/base/MechanicWhereUniqueInput";

@InputType()
class AppointmentWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  date?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumAppointmentStatus,
  })
  @IsEnum(EnumAppointmentStatus)
  @IsOptional()
  @Field(() => EnumAppointmentStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: () => VehicleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VehicleWhereUniqueInput)
  @IsOptional()
  @Field(() => VehicleWhereUniqueInput, {
    nullable: true,
  })
  vehicle?: VehicleWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ServiceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ServiceWhereUniqueInput)
  @IsOptional()
  @Field(() => ServiceWhereUniqueInput, {
    nullable: true,
  })
  service?: ServiceWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => MechanicWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MechanicWhereUniqueInput)
  @IsOptional()
  @Field(() => MechanicWhereUniqueInput, {
    nullable: true,
  })
  mechanic?: MechanicWhereUniqueInput;
}

export { AppointmentWhereInput as AppointmentWhereInput };