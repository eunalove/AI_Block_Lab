package com.example.ai_block_lab.WebSocket;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.locks.ReentrantLock;

@Service
public class BlockLockManager {
    private ConcurrentHashMap<String, ReentrantLock> lockMap = new ConcurrentHashMap<>();

    public ReentrantLock getLock(String blockId) {
        return lockMap.computeIfAbsent(blockId, k -> new ReentrantLock());
    }
}
