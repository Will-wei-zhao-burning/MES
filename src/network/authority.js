/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-12-24 14:30:23
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-26 14:07:43
 */
import {request} from './request'

//用户登录
export function login(data){
    return request({
        method:'POST',
        url:'/api/Auth/LogIn',
        headers: { 'Content-Type': 'application/json-patch+json' },
        data:data
    })
}
//获取部门列表
export function getAllDeptForms(){
    return request({
        method:'GET',
        url:'/api/Auth/GetAllDeptForms'
    })
}
//获得所有职位信息
export async function getAllAuthPosition(data){
    return await request({
        method:'POST',
        url:'/api/Auth/GetAllAuthPosition',
        headers: { 'Content-Type': 'application/json-patch+json' },
        data:data
    })
}
//新建职位
export async function InsertOrUpdatePosition(data){
    return await request({
        method:'POST',
        url:'/api/Auth/InsertOrUpdatePosition',
        headers: { 'Content-Type': 'application/json-patch+json' },
        data:data
    })
}
//删除职位
export async function DeletePosition(data){
    return await request({
        method:'DELETE',
        url:'/api/Auth/DeletePosition',
        headers:{ 'Content-Type': 'application/json-patch+json' },
        data:data
    })
}
