/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webapp.admin.service;

import java.util.List;

/**
 *
 * @author mamun
 */
public interface IService<T> {

    int add(T o);

    int update(T o);

    int delete(int id);

    T get(int id);

    List<T> getList(T o);
}
